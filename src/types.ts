import { z } from "zod";

export const RequestPayloadSchema = z.object({
  url: z.string().url(),
  headers: z.record(z.string()).optional(),
  method: z.string().optional(),
  body: z
    .object({})
    .passthrough()
    .optional()
    .transform((body) => JSON.stringify(body)),
});

export type RequestPayload = z.infer<typeof RequestPayloadSchema>;
