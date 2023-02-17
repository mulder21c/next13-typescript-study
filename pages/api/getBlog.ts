import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      createdAt: "2023-02-16T12:18:50.223Z",
      name: "Bradford Halvorson",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg",
      title: "title 1",
      id: "1",
    },
    {
      createdAt: "2023-02-16T23:06:23.542Z",
      name: "Nettie Crooks",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
      title: "title 2",
      id: "2",
    },
    {
      createdAt: "2023-02-16T17:21:04.150Z",
      name: "Calvin Kessler",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/987.jpg",
      title: "title 3",
      id: "3",
    },
    {
      createdAt: "2023-02-16T07:24:16.701Z",
      name: "Charlotte Bruen",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/612.jpg",
      title: "title 4",
      id: "4",
    },
    {
      createdAt: "2023-02-16T12:00:36.905Z",
      name: "Mr. Adam Swift",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg",
      title: "title 5",
      id: "5",
    },
    {
      createdAt: "2023-02-16T22:38:24.300Z",
      name: "Jamie Klocko",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/944.jpg",
      title: "title 6",
      id: "6",
    },
    {
      createdAt: "2023-02-16T12:08:05.549Z",
      name: "Faye Wisoky II",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg",
      title: "title 7",
      id: "7",
    },
    {
      createdAt: "2023-02-16T18:53:47.001Z",
      name: "Lorenzo Bechtelar II",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg",
      title: "title 8",
      id: "8",
    },
    {
      createdAt: "2023-02-16T22:42:13.482Z",
      name: "Dr. Toby Mertz",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg",
      title: "title 9",
      id: "9",
    },
    {
      createdAt: "2023-02-16T23:06:46.314Z",
      name: "Duane Reynolds",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg",
      title: "title 10",
      id: "10",
    },
    {
      createdAt: "2023-02-16T18:23:44.650Z",
      name: "Mrs. Cedric Bernhard",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/603.jpg",
      title: "title 11",
      id: "11",
    },
    {
      createdAt: "2023-02-16T11:54:26.107Z",
      name: "Darnell Ratke",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/621.jpg",
      title: "title 12",
      id: "12",
    },
    {
      createdAt: "2023-02-17T04:40:10.332Z",
      name: "Dolores Bernier",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg",
      title: "title 13",
      id: "13",
    },
    {
      createdAt: "2023-02-16T10:55:09.665Z",
      name: "Frankie Hagenes",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/814.jpg",
      title: "title 14",
      id: "14",
    },
    {
      createdAt: "2023-02-17T01:52:47.290Z",
      name: "Patricia Lehner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1081.jpg",
      title: "title 15",
      id: "15",
    },
    {
      createdAt: "2023-02-16T19:16:58.429Z",
      name: "Mindy Ortiz",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/967.jpg",
      title: "title 16",
      id: "16",
    },
    {
      createdAt: "2023-02-17T02:40:09.001Z",
      name: "Thelma Gibson",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1222.jpg",
      title: "title 17",
      id: "17",
    },
    {
      createdAt: "2023-02-16T10:35:01.615Z",
      name: "Maryann Lind",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg",
      title: "title 18",
      id: "18",
    },
    {
      createdAt: "2023-02-16T17:27:35.915Z",
      name: "Antonio Bayer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/599.jpg",
      title: "title 19",
      id: "19",
    },
    {
      createdAt: "2023-02-16T08:02:12.207Z",
      name: "Suzanne Kshlerin",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/144.jpg",
      title: "title 20",
      id: "20",
    },
    {
      createdAt: "2023-02-16T14:15:12.038Z",
      name: "Elizabeth Greenholt",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg",
      title: "title 21",
      id: "21",
    },
    {
      createdAt: "2023-02-16T19:05:26.977Z",
      name: "Myrtle Heller",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg",
      title: "title 22",
      id: "22",
    },
    {
      createdAt: "2023-02-16T06:30:05.964Z",
      name: "Kristina Will",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg",
      title: "title 23",
      id: "23",
    },
    {
      createdAt: "2023-02-16T06:20:40.233Z",
      name: "Ms. Grady Koepp",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/115.jpg",
      title: "title 24",
      id: "24",
    },
    {
      createdAt: "2023-02-17T00:29:41.301Z",
      name: "Angela Baumbach",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/261.jpg",
      title: "title 25",
      id: "25",
    },
    {
      createdAt: "2023-02-17T00:50:44.721Z",
      name: "Benjamin Carter",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg",
      title: "title 26",
      id: "26",
    },
    {
      createdAt: "2023-02-16T13:24:09.744Z",
      name: "Stacey Marvin",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/264.jpg",
      title: "title 27",
      id: "27",
    },
    {
      createdAt: "2023-02-16T07:42:44.010Z",
      name: "Nathan Labadie",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg",
      title: "title 28",
      id: "28",
    },
    {
      createdAt: "2023-02-16T07:15:19.169Z",
      name: "Bert Wisoky",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg",
      title: "title 29",
      id: "29",
    },
    {
      createdAt: "2023-02-16T12:00:58.306Z",
      name: "Thomas Anderson",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/618.jpg",
      title: "title 30",
      id: "30",
    },
  ]);
}
