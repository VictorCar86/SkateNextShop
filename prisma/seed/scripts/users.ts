import { faker } from '@faker-js/faker'
import prisma from "@/lib/prisma"
import { hashPassword } from '@/lib/auth'

/**
 * Creates sample users for the database
 * @returns Array of created user objects
 */
async function createUsers() {
  console.info('Creating sample users...')

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@skatenextshop.com',
      password: await hashPassword('admin123'),
      role: 'ADMIN',
      image: faker.image.avatar(),
      emailVerified: new Date()
    }
  })

  // Create regular users
  const users = [adminUser]
  const userCount = 25 // Number of regular users to create

  for (let i = 0; i < userCount; i++) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName, lastName, provider: 'example.com' }).toLowerCase(),
        password: await hashPassword('password123'),
        role: 'CUSTOMER',
        image: faker.helpers.maybe(() => faker.image.avatar(), { probability: 0.7 }),
        emailVerified: faker.helpers.maybe(() => faker.date.past(), { probability: 0.8 })
      }
    })
    users.push(user)
  }

  return users
}

export default createUsers