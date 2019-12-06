export class Dialog {

    dialog: string;
    duration: number;

    constructor(dialog: string, duration: number) {
        this.dialog = dialog;
        this.duration = duration;
    }

    getDialog() {
        return this.dialog;
    }

    getDuration() {
        return this.duration;
    }
}
