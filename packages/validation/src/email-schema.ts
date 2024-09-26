import * as v from "valibot";

const emailSchema = v.pipe(
  v.string("Please provide an email"),
  v.email("Please provide a valid email"),
);

export type EmailSchemaInput = v.InferInput<typeof emailSchema>;
export type EmailSchemaOutput = v.InferOutput<typeof emailSchema>;

export default emailSchema;
