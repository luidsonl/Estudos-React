import UserConfigTypes from "../types/UserConfigTypes";

class UserConfigService{
    private config : UserConfigTypes;

    constructor(){
        this.config = {
            theme: 'light'
        }
    }

    getTheme(): string{
        return this.config.theme;
    }

    toggleTheme() {
        this.config.theme = this.config.theme === 'light' ? 'dark' : 'light';
    }
}


export default new UserConfigService();