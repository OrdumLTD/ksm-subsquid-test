import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Preimage {
    constructor(props?: Partial<Preimage>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("timestamp with time zone", {nullable: true})
    createdAt!: Date | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    createdAtBlock!: bigint | undefined | null
}
