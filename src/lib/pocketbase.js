import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); 

export async function getFestivalInfo() {
  return await pb.collection('festival_info').getFirstListItem({});
}

export async function getPartners() {
  return await pb.collection('partners').getFullList({});
}
