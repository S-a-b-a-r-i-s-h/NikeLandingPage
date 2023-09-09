const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg,changeColour,colour }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
      changeColour(imgURL.color)
    }
  };
//text-coral-red text-yellow-700 text-cyan-900 border-coral-red bg-coral-red border-yellow-700 bg-yello-900 border-cyan-900 bg-cyan-900
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? `border-${imgURL.color} `
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 transition duration-1000'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain transition duration-1000'
        />
      </div>
    </div>
  );
};

export default ShoeCard;