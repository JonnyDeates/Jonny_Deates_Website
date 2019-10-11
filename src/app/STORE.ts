import * as resume from '../assets/JSON/resume.json';
import * as socialmedia from '../assets/JSON/socialmedia.json';
import * as project from '../assets/JSON/project.json';
import * as about from '../assets/JSON/about.json';

function getLanguages() {
  const languages = [];
  resume.languages.forEach(item => languages.splice(0, 0, {
    title: item.title, description: item.description, years: item.years, img: item.img, route: item.route
  }));
  return languages;
}
function getSocialMedia() {
  const media = [];
  socialmedia.socialmedia.forEach(item => media.splice(0, 0, {
    route: item.route, img: item.img
  }));

  return media;
}
function getAboutData() {
  const media = [];
  about.about.description.forEach(item => media.splice(0, 0, item));

  return media;
}
function getSelfImgs() {
  const media = [];
  about.about.imgs.forEach(item => media.splice(0, 0, {
    img: item.img, alt: item.alt
  }));

  return media;
}
function getProjectData(all?) { // Bool == true for all data  && false for limited
  const media = [];
  if (all) {
    project.projects.forEach(item => media.splice(0, 0, {
      title: item.title, description: item.description, color: item.color, img: item.img, route: item.router
    }));
  } else {
    project.projects.forEach(item => media.splice(0, 0, {
      title: item.title, shortDesc: item.shortDesc, color: item.color, img: item.img, route: item.router
    }));
  }
  return media;
}

export default {getLanguages, getSocialMedia, getProjectData, getSelfImgs, getAboutData};
