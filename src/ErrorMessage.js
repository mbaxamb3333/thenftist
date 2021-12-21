export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div>
        <div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg> */}

          {/* if ({message}.Startswith("insufficient funds"))
          {
            <h1 className="text-titlu2">{"Insuficient Funds"}</h1>
          }
          if ({message}.Startswith("invalid hex "))
          {
            <h1 className="text-titlu2">{"Invalid number of NFTs"}</h1>
          } */}


            <label className="text-titlu">{message}</label>

        </div>
      </div>
    );
  }
  