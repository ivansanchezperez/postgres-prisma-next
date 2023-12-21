import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "ivansanchezp98@gmail.com" },
      update: {},
      create: {
        name: "Ivan",
        email: "ivansanchezp98@gmail.com",
        password: "070705",
        image:
          "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
        baseSalary: 2900,
      },
    }),
    prisma.users.upsert({
      where: { email: "dianalorena218@gmail.com" },
      update: {},
      create: {
        name: "Diana",
        email: "dianalorena218@gmail.com",
        password: "031500",
        image:
          "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
        baseSalary: 1500,
      },
    }),
  ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
