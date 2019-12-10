import { createGlobalStyle } from 'styled-components';

export const GlobalIconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";

    /* IE9 */
    src: url('iconfont.eot?t=1574335281223');

    src:
      /* IE6-IE8 */
      url('iconfont.eot?t=1574335281223#iefix') format('embedded-opentype'),
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQsAAsAAAAACHgAAAPeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEEINxATYCJAMUCwwABCAFhG0HTxuEB8gekiQlAgccAABYiCYeSs7Df2uv983ObDbzA+wSBSjR8fFRUQQqKpVlCWREjW90K1SFYVdh8vN51kvTUTJGZoV0RBU/rdNN/9ongOlCN+E0wgpqgIAByv9zzHRpDZZ/bXPJDtob4CiBZrNdRGHQ4YHegZyo3zB2eZFtYIxIHidQzZiAOMgpqgJ7mX5cIO60ajnYJyxyRX3ohLbg0iw+Q9GlN5IOAJ+8349/EJE9SWnopx7eZqsg7Sf7TCTn/Z8Hxw4CpMO5wK6iwSqQiftCzx0yyKwiVXlvqR2g6iRpqG0xzyzPxP//iRQb0lXjHx4hyRqipdcOgB2UzfxkLT7Bzxg+iZ8WtdaKUOt60eWSin58Af7TcbPeK8mSmHK07ybpYcOcp9dcuU4MDdUMDFQNDlavvF5avW6fdbMiQ75+vfaLBgZcqCPHKkpP1zesD6a2+tbJz9ArQY36QK3oIubX1s6nViRVnz4Irw7RK68QxFNqxcFQRQ8mGsA4X0yEPAefVg8kKi1daSWI16IuX01gBsv4zhpZKWosSXnr0LOZD15U0ddrs7coSbVeT0yz6+raLZudS+6+cWO3rSSpldwdBXNny8YV7xR3DqP+rVoqOX1astQQYpGtiL4hPHC5vWOyepHz/8vMIV1KabUkQ6FNuS79nWLB1+JkhM0uy4+t0To104VpCU9aanG7n9dv/5EfRwZDgosXnYb5D3NanlB4sEIBx8gXr6THMxe5O0q/Ozl/kyI4VZqZ11AtatS/YocGTldk5rektE5tORbFFx6qkEdeviKPS0L44Y7Otja+Oyik3uVu9bhB0XOe58njjOqn+C7HANMAHi+Ql8g0gMf/u0hK3SmF5jw3uHnk+P/gb8y9zKvVJemrPZ3Bjz8P9+TNJS9TS5a+dWnDiazIdWvJ0qglkbzFQcwiyXMV7zow5t4wusnGtYTOZARJn2lodGaRGbsKRc8atDrbUK3IvbpnnIAUuR/LFgMII45BMuQrNEZ0IjP2LhRT3kJrJBKqo/C4Zc98WipTQHKMVIxiOqNV8ibOtGPKr69A6skGuRCXe5QaJFi0cSacDUvnc5EJCUOcYZmijsCYYziBNzI54GnIYOAZs8DrkBKzGozNCTIZV/RJrJI3AmWfAJHDEBWGwnQMLSWeCefMxqjMz1dA1CYzkBMqxsqCNRCBhXZzRjhWWANkrsbUaOxS9raYQi0ChnH4KI6AZ8TIgS7EYGR4DHPxQTqIEsbSdEiZJZChaVxTDTu9zniP16DS31AiRRM5SrTaJ0guKDWSdLmtwOOD39N50mStwTDRjEwTOd8MAAAA') format('woff2'),
      url('iconfont.woff?t=1574335281223') format('woff'),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('iconfont.ttf?t=1574335281223') format('truetype'),
      /* iOS 4.1- */
      url('iconfont.svg?t=1574335281223#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont", sans-serif !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconfont-search::before {
    content: "\\e62e";
  }

  .iconfont-Aa::before {
    content: "\\e636";
  }

  .iconfont-rotate::before {
    content: "\\e6aa";
  }

  .iconfont-quill-pen-fill::before {
    content: "\\e673";
  }
`;
