/**
 * Represents a person.
 */
export class Person {
    /**
     * The ID of the person.
     */
    public id: number | undefined;

    /**
     * The first name of the person.
     */
    public firstName: string | undefined;

    /**
     * The last name of the person.
     */
    public lastName: string | undefined;

    /**
     * The address of the person.
     */
    public address: string | undefined;

    /**
     * The city of the person.
     */
    public city: string | undefined;

    /**
     * The province of the person.
     */
    public province: string | undefined;

    /**
     * The phone number of the person.
     */
    public phone: string | undefined;

    /**
     * The last updated date of the person.
     */
    public lastUpdated: Date | undefined;
}
