function make_album (artist: string , tittle:string, tracks?:number) {

    const album: {artist: string , tittle:string, tracks?:number} = {

        artist : artist,
        tittle : tittle
    }


    if(tracks !== undefined){
        album.tracks = tracks;
    }


return album;

}

const album1 = make_album('Artist 1' , 'Album tittle 1');
console.log(album1);

const album2 = make_album('Artist 2' , 'Album tittle 2');
console.log(album2);


const album3 = make_album('Artist 3' , 'Album tittle 3' , 12);
console.log(album3);

