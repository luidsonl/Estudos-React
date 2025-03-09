import UserConfigTypes from "../types/UserConfigTypes";

class UserConfigService{
    private config : UserConfigTypes;

    constructor(){
        this.config = {
            theme: 'light',
            paginationRange: 2,
        }
    }

    getTheme(): string{
        return this.config.theme;
    }
    
    toggleTheme() {
        this.config.theme = this.config.theme === 'light' ? 'dark' : 'light';
    }

    getPaginationRange(): number{
        return this.config.paginationRange;
    }
    setPaginationRange(range: number){
        this.config.paginationRange = range;
    }
}


export default new UserConfigService();