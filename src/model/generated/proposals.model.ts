import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Proposals {
    constructor(props?: Partial<Proposals>) {
        Object.assign(this, props)
    }

    /**
     * Proposal
     */
    @PrimaryColumn_()
    id!: string
}
