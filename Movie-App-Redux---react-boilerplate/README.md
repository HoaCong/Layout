# Một số câu hỏi về Reactjs - Redux

1. Tại sao nên sử dụng Reactjs (nó liên quan đến CSR vs SSR) ?
2. React sử dụng cú pháp JSX, JXS là gì?
3. Virtual Dom, component là gì?
4. Props , State (local State, global State) là gì ? sự khác nhau giữa chúng ?
5. Licycle trong React (Class/Function component)
6. hooks là gì (verison 16.8 được sinh ra) ? vì sao nên sử dụng hooks ?

- useEffect thay thế cho 3 licycle nào trong class Component ?
- setState là hàm đồng bộ hay bất đồng bộ ?
- custom hooks là gì ?
- context Api ?

7. Liên quan về performance React ( memo, useCallback, useMemo)
8. Higher order component ( cái này cần nắm chắc để sau viết common sử dụng được cho nhiều component => dùng rất là nhiều luôn :)))
9. Redux là gì? khi nào sử dụng redux, không dùng redux có được không?
10. Các thành phần cấu tạo nên redux (action, reducer, store, dispatch, middleware)

# Kiến thức nâng cao về Reactjs

1. Code splitting ( sử dụng React.lazy)
2. Render props
3. Uncontroller Component
4. Forwarding refs
5. Error Boundaries

# Kiến thức nâng cao về Redux (Thông thường họ sẽ dùng 1 middeware để tách biệt phần side effect ra xử lý riêng: Redux thunk, Redux Saga, Redux Obsable)

1. Những Effect creators trong saga
2. Normalizing State Shape (Đây là 1 cách tổ tức state phải nói là quá hay, giải quyết được khá là nhiều case hay ho)
   > https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape > https://redux.js.org/recipes/structuring-reducers/updating-normalized-data
3. dùng immer.js trong redux

# Souce hiện tại công ty mình đang dùng (React-boilerplate)

> https://github.com/react-boilerplate/react-boilerplate

1. hiểu về cách tổ chức folder của nó
2. các lib nó sử dụng (reselect, redux saga, ...)
3. sử dụng CLI (đỡ phải tạo tay mệt)

# Api Movie

> API Movies: https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

> DEMO: https://movie-reactjs.web.app
> API ACTOR: https://api.themoviedb.org/3/movie/379686/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335

1. danh sách Popular Movies ( api trên)
   `js https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f?page=1`
2. tìm kiếm Movie: truyền thêm tham số query
   `js https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&query="hôn lễ của em"`
3. xem thêm movie
   `js themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f&page={page}`

4. có thể truyền thêm language
   `js https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f&language=en-US&page=1`

5. viết config riêng

> DEMO: https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg
> link: https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=2

```js
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';
export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
```

    {
      "adult": false,
      "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        878
      ],
      "id": 379686,
      "original_language": "en",
      "original_title": "Space Jam: A New Legacy",
      "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
      "popularity": 4310.589,
      "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
      "release_date": "2021-07-08",
      "title": "Space Jam: A New Legacy",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 1386
    },

## DEMO

https://movie-reactjs.web.app
