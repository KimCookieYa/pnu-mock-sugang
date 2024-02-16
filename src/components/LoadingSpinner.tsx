import { ColorRing } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center fixed bg-black/20 top-0 left-0">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}
