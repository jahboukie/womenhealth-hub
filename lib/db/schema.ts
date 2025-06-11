import { pgTable, serial, text, timestamp, boolean, varchar } from 'drizzle-orm/pg-core';

// Contact form submissions
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  message: text('message').notNull(),
  source: varchar('source', { length: 100 }).default('website'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  processed: boolean('processed').default(false),
});

// Newsletter subscriptions
export const newsletters = pgTable('newsletters', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  subscribed: boolean('subscribed').default(true),
  source: varchar('source', { length: 100 }).default('website'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Demo requests
export const demoRequests = pgTable('demo_requests', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  title: varchar('title', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  demoType: varchar('demo_type', { length: 100 }).default('general'),
  status: varchar('status', { length: 50 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  scheduledAt: timestamp('scheduled_at'),
});

// Website analytics (non-sensitive)
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  path: varchar('path', { length: 500 }).notNull(),
  userAgent: text('user_agent'),
  referrer: varchar('referrer', { length: 500 }),
  country: varchar('country', { length: 10 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;

export type Newsletter = typeof newsletters.$inferSelect;
export type NewNewsletter = typeof newsletters.$inferInsert;

export type DemoRequest = typeof demoRequests.$inferSelect;
export type NewDemoRequest = typeof demoRequests.$inferInsert;

export type PageView = typeof pageViews.$inferSelect;
export type NewPageView = typeof pageViews.$inferInsert;
