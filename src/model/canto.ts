export class Canto {
    constructor(
        public fileName: string,
        public number: number,
        public category: string,
        public cantoName: string,
        public sheetCounter: number,
        public formattedCanto: string
    ) {}
}