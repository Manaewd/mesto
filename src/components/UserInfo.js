export class UserInfo {
    constructor({ selectorName, selectorJob, selectorAvatar }) {
        this._profileTitle = document.querySelector(selectorName);
        this._profileSubtitle = document.querySelector(selectorJob);
        this._profileAvatar = document.querySelector(selectorAvatar);
      }
    
      getUserInfo() {
        const userInfo = {
          profilename: this._profileTitle.textContent,
          profilejob: this._profileSubtitle.textContent
        };

        return userInfo
      }

      setUserInfo({ name, about , avatar}) {
        this._profileTitle.textContent = name;
        this._profileSubtitle.textContent = about;
        this._profileAvatar.style.backgroundImage  = `url(${avatar})`;
      }
    }   