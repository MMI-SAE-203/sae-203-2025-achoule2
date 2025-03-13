
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbasesae203.adrienchoulet.fr:443'); 

export async function getFestivalInfo() {
  return await pb.collection('festival_info').getFirstListItem({});
}

export async function getPartners() {
  return await pb.collection('partners').getFullList({});
}
