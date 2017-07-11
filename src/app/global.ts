export class GlobalApp {
    constructor() {
    }
    localStorageItem(id: string): string {
        return JSON.parse(localStorage.getItem(id))
    }
}