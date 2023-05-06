export class NgUserInformation {
    constructor (
        public firstName: string, 
        public lastName: string,
        public neigborhood: string,
        public city: string,
        public state: string
    ) {}
}

export class NgUserInformationCity {
    constructor (
        public city: string
    ) {}
}