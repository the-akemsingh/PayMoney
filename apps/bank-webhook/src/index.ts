import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
import prisma from "@repo/db/client";

app.post("/bankWebhook", async (req, res) => {
  const PaymentInfo: {
    token: number;
    amount: number;
    UserId: number;
  } = {
    token: req.body.token,
    amount: req.body.amount*100,
    UserId: req.body.UserId,
  };

  try {
    await prisma.$transaction([
        prisma.balance.upsert({
            where: {
              UserId: PaymentInfo.UserId,
            },
            update: {
              amount: {
                increment: PaymentInfo.amount,
              },
            },
            create: {
              UserId: PaymentInfo.UserId,
              amount: PaymentInfo.amount,
              locked:0,
            },
          }),
      prisma.onRampTrasactions.updateMany({
        where: {
          token: PaymentInfo.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.status(200).json({
        message: "Transaction Captured Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});
