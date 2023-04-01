export class UserInfo {
    constructor({ selectorName, selectorJob }) {
        this._profileTitle = document.querySelector(selectorName);
        this._profileSubtitle = document.querySelector(selectorJob);
      }
    
      getUserInfo() {
        const userInfo = {
          profilename: this._profileTitle.textContent,
          profilejob: this._profileSubtitle.textContent
        };

        return userInfo
      }

      setUserInfo({ name, job }) {
        this._profileTitle.textContent = name;
        this._profileSubtitle.textContent = job;
      }
    }