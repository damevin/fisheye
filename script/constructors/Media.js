class Media {
 constructor(data){
  this.id = id;
  this.image = data.image;
  this.video = data.video;
  this.imgAlt = data.imgAlt;
  this.likes = data.likes;
  this.date = data.date;
  this.price = data.price;
 }
 
}

class Photography extends Media {
 createHTML() {
  let elementPhotography = document.createElement('img');
  elementPhotography.setAttribute('src', this.image);
  elementPhotography.setAttribute('alt', this.alt);
  elementPhotography.setAttribute('role', 'button');
  elementPhotography.className = 'photographer-page__gallery__photography';
  return eltImage;
}

get createElement() {
 return `
 <img class="photographer-page__gallery__photography" src='../assets/medias/${photographer.name}/${image.image}'>`
}

}

class Video extends Media {

}