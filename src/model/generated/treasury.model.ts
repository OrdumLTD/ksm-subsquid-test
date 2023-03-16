import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Treasury {
    constructor(props?: Partial<Treasury>) {
        Object.assign(this, props)
    }

    /**
     * Treasury
     */
    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    test!: string | undefined | null

    @Column_("text", {nullable: true})
    propIndex!: string | undefined | null
}
