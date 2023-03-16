module.exports = class Data1678961556625 {
    name = 'Data1678961556625'

    async up(db) {
        await db.query(`CREATE TABLE "preimage" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE, "created_at_block" numeric, CONSTRAINT "PK_dff8526c5d16d71afbefb55b286" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "preimage"`)
    }
}
