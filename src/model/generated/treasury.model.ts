import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Treasury {
    constructor(props?: Partial<Treasury>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Treasury
     */
    @Index_()
    @Column_("text", {nullable: true})
    propIndex!: string | undefined | null
}
