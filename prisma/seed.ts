import { prisma } from "../src/lib/prisma";

async function seed() {
  const eventId = "29e43dd0-5cb6-466a-8aea-a6277ecf2318";

  await prisma.event.create({
    data: {
      id: eventId,
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para apaixonados por programação!",
      maximumAttendees: 150,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
