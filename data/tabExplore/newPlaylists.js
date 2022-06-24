var listNewPlaylist = [
    {
        name: "Sau Này Nếu Có Yêu Ai",
        singer: ["Tăng Phúc", "Ngô Kiến Huy"],
        order: "1",
        time: "12.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist1.jpg"
    },
    {
        name: "Sau Này Của Chúng Ta",
        singer: ["Lê Hiếu"],
        order: "2",
        time: "14.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist2.jpg"
    },
    {
        name: "vâng anh đi đi (liu riu version)",
        singer: ["Bích Phương"],
        order: "3",
        time: "07.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist3.jpg"
    },
    {
        name: "Vậy Là Ta Mất Nhau",
        singer: ["Khải Đăng"],
        order: "4",
        time: "04.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist4.jpg"
    },
    {
        name: "Bao Lâu Ta Lại Yêu Một Người",
        singer: ["Doãn Hiếu", "B."],
        order: "5",
        time: "02.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist5.jpg"
    },
    {
        name: "Anh Biết Em Không Tin",
        singer: ["Kidz"],
        order: "6",
        time: "07.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist6.jpg"
    },
];

const NEW_PLAYLIST_STORAGE_KEY = 'VIK_NEW_PLAYLIST';

localStorage.setItem(NEW_PLAYLIST_STORAGE_KEY, JSON.stringify(listNewPlaylist));
