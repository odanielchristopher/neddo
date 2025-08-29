-- CreateTable
CREATE TABLE "public"."refresh-tokens" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "issues_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refresh-tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."refresh-tokens" ADD CONSTRAINT "refresh-tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
