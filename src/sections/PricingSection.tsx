

const PricingSection = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 py-32 relative" id="pricing">
      <div className=' absolute -z-50 right-[10%] -top-[10%]' style={{
        width: 594,
        height: 594,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)'
      }}></div>
      <h1 className="text-[28px] gradient-text font-bold">PRICING AND PLAN</h1>
      <div className=" bg-accent rounded-xl py-5 grid lg:grid-cols-3 grid-cols-1 relative lg:gap-0 gap-5">
        <div className="flex flex-col gap-5 px-5 justify-between">
          <div className="pb-5 border-b border-white flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="btn-bg w-[184px] h-[39px] flex items-center justify-center rounded-full mx-auto">
                <p className="text-lg text-blacks font-bold">90 Days Package</p>
              </div>
              <p className="text-[36px] text-white mx-auto font-bold">$9,999</p>
            </div>
            <div className="text-white flex flex-col gap-2 mx-auto text-center">
              <p className="text-[16px] font-medium">24x7 Support</p>
              <p className="text-[16px] font-medium">Basic Server Specifications</p>
              <p className="text-[16px] font-medium">Best ROI</p>
              <p className="text-[16px] font-medium">4 GB Ram</p>
              <p className="text-[16px] font-medium">15 Days Money Back</p>
            </div>
          </div>
          <p className="text-center text-[16px]">In 90 Days Package You Can Withdraw The Earnings On Paypal, Bank Transfer Or In USDT (Trc20)</p>
          <button className="w-[Fill (309.67px)] h-[52px] text-lg font-semibold rounded-md text-[#912EE0] border border-[#912EE0] hover:bg-[#BC17B1] hover:text-white hover:border-0">
            Choose Plan
          </button>
        </div>

        <div className="flex flex-col gap-5 p-[20px] lg:w-[349.67px] w-full lg:scale-[1.15] mx-auto justify-between bg-price rounded-lg text-white lg:translate-y-[-20px, -20px]  relative" >
          <div className="pb-5 border-b border-white flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="btn-bg flex-col flex items-center w-full justify-center rounded-[21px] p-[10px] mx-auto">
                <p className="text-lg text-blacks font-bold">365 Days Package</p>
                <p className="text-[36px] text-blacks mx-auto font-bold">$29,999</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mx-auto text-center">
              <p className="text-[16px] font-medium">24x7 Support</p>
              <p className="text-[16px] font-medium">Ultimate Server Specifications</p>
              <p className="text-[16px] font-medium">High ROI</p>
              <p className="text-[16px] font-medium">4 GB Ram</p>
              <p className="text-[16px] font-medium">60 Days Money Back</p>
            </div>
          </div>
          <p className="text-center text-[16px]">In 365 Days Package You Can Withdraw The Earnings On Paypal, Bank Transfer Or In USDT (Trc20)</p>
          <button className="h-[52px] text-lg font-semibold rounded-md btn-bg text-blacks">
            Choose Plan
          </button>
        </div>

        <div className="flex flex-col gap-5 px-5 justify-between">
          <div className="pb-5 border-b border-white flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="btn-bg w-[184px] h-[39px] flex items-center justify-center rounded-full mx-auto">
                <p className="text-lg text-blacks font-bold">180 Days Package</p>
              </div>
              <p className="text-[36px] text-white mx-auto font-bold">$19,999</p>
            </div>
            <div className="text-white flex flex-col gap-2 mx-auto text-center">
              <p className="text-[16px] font-medium">24x7 Support</p>
              <p className="text-[16px] font-medium">Golden Server Specifications</p>
              <p className="text-[16px] font-medium">Best ROI</p>
              <p className="text-[16px] font-medium">4 GB Ram</p>
              <p className="text-[16px] font-medium">30 Days Money Back</p>
            </div>
          </div>
          <p className="text-center text-[16px]">In 180 Days Package You Can Withdraw The Earnings On Paypal, Bank Transfer Or In USDT (Trc20)</p>
          <button className="w-[Fill (309.67px)] h-[52px] text-lg font-semibold rounded-md text-[#912EE0] border border-[#912EE0] hover:bg-[#BC17B1] hover:text-white hover:border-0">
            Choose Plan
          </button>
        </div>
      </div>

      <div className=' absolute -z-50 lg:-right-[2%] -right-3 -bottom-[10%]' style={{
        width: 250,
        height: 250,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)'
      }}></div>
    </div>
  );
};

export default PricingSection;