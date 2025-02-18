import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-screen bg-[#18181B] flex  ">
      <div className="max-w-[1264px] w-full h-[755px]">
        <div className="w-screen flex mt-12 justify-center bg-[#ef4444]">
          <div className="max-w-[1264px] w-full flex gap-[34px] items-center px-[98px] py-[28px] overflow-hidden ">
            <h2 className="text-[30px] font-[600] leading-[36px] text-primary-foreground ">
              Fresh fast delivered
            </h2>
            <h2 className="text-[30px] font-[600] leading-[36px] text-primary-foreground ">
              Fresh fast delivered
            </h2>
            <h2 className="text-[30px] font-[600] leading-[36px] text-primary-foreground ">
              Fresh fast delivered
            </h2>
            <h2 className="text-[30px] font-[600] leading-[36px] text-primary-foreground ">
              Fresh fast delivered
            </h2>
            <h2 className="text-[30px] font-[600] leading-[36px] text-primary-foreground ">
              Fresh fast delivered
            </h2>
          </div>
        </div>
        <div className="w-screen flex flex-col items-center ">
          <div className="max-w-[1264px] w-full flex gap-[220px] mt-[76px] ">
            <div className="flex flex-col items-center gap-3">
              <Image src="/logo.svg" width={46} height={37.29} alt="" />
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-[600] leading-[28px] text-primary-foreground ">
                  Nom<span className="text-[#ef4444] ">Nom</span>
                </h4>
                <h5 className="text-[12px] font-[400] leading-[16px] text-secondary ">
                  Swift delivery
                </h5>
              </div>
            </div>
            <div className="flex gap-[112px]">
              <div className="w-[122px] flex flex-col gap-3">
                <h4 className="text-[16px] font-[400] leading-[28px] text-muted-foreground ">
                  NOMNOM
                </h4>
                <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                  Home
                </h5>
                <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                  Contact
                </h5>
                <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                  Delivery zone
                </h5>
              </div>
              <div className="flex gap-[56px]">
                <div className="w-[132px] flex flex-col gap-3">
                  {" "}
                  <h4 className="text-[16px] font-[400] leading-[28px] text-muted-foreground ">
                    MENU
                  </h4>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Appetizers
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Salads
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Pizzas
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Lunch favorites
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Main dishes
                  </h5>
                </div>
                <div className="w-[132px] flex flex-col gap-3">
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground mt-10 ">
                    Side dish
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Brunch
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Desserts
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Beverages
                  </h5>
                  <h5 className="text-[16px] font-[400] leading-[24px] text-primary-foreground ">
                    Fish & Sea foods
                  </h5>
                </div>
              </div>
              <div className="w-[] ">
                <h4 className="text-[16px] font-[400] leading-[28px] text-muted-foreground ">
                  FOLLOW US
                </h4>
                <div className="flex gap-4 mt-4 ">
                  <Image src="/fb.svg" width={28} height={27} alt="" />
                  <Image src="/instaIcon.svg" width={28} height={27} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1264px] w-full py-8 border-t-[1px] border-t-border-toast-destructive mt-[104px] flex gap-12 ">
            <div className="flex gap-1">
              <h4 className="text-[14px] font-[400] leading-[20px] text-muted-foreground">
                Copy right 2024
              </h4>
              <h4 className="text-[14px] font-[400] leading-[20px] text-muted-foreground ">
                © Nomnom LLC
              </h4>
            </div>
            <h4 className="font-[400] leading-[20px] text-[14px] text-muted-foreground ">
              Privacy policy
            </h4>
            <h4 className="font-[400] leading-[20px] text-[14px] text-muted-foreground ">
              Terms and condition
            </h4>
            <h4 className="font-[400] leading-[20px] text-[14px] text-muted-foreground ">
              Cookie policy
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
