import prisma from "@/lib/prisma";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const email = req.query.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const user = await prisma.users.findFirstOrThrow({
        where: {
          email: {
            equals: email,
          },
        },
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: "User not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
