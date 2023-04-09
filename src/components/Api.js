export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так... Ошибка: ${res.status}`);
        }
      }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }

    setUserInfo({ profilename, profilejob, avatar }) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: profilename,
            about: profilejob,
            avatar: avatar
          }) 
        })
        .then(res => this._checkResponse(res))
      }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
        .then(res => this._checkResponse(res));
    }
    // +
    addNewCard({ name, link }) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(res => this._checkResponse(res));
    }

    likeCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: "PUT",
          headers: this._headers,
        }).then(res => this._checkResponse(res));
      }
    
      deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: "DELETE",
          headers: this._headers,
        }).then(res => this._checkResponse(res));
      }
    
      deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(res => this._checkResponse(res));
      }


//   toggleLikeCard(id) {
//     if (!isLiked) {
//       return fetch(`${this._url}/cards/${id}/likes`, {
//         method: 'PUT',
//         headers: this._headers
//       }).then(res => this._checkResponse(res))
//     } else {
//       return fetch(`${this._url}/cards/${id}/likes`, {
//         method: 'DELETE',
//         headers: this._headers
//       }).then(res => this._checkResponse(res))
//     }
//   }
}