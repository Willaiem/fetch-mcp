import { z } from "zod";

export const RequestPayloadSchema = z.object({
  url: z.string().url(),
  headers: z.record(z.string()).optional(),
  method: z.string().optional(),
  body: z
    .object({})
    .passthrough()
    .transform((body) => JSON.stringify(body))
    .optional(),
});

export type RequestPayload = z.infer<typeof RequestPayloadSchema>;
