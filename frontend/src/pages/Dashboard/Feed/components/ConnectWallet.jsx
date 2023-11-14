import { RxCross1 } from "react-icons/rx";
import { ModalBox } from "../../../../components/custom/modal-box";
import { CardHeader } from "../../../../components/ui/card";

const ConnectWallet = ({isShowSoonPost, connected, onExit}) => {
    return (
        <ModalBox
        isVisible={isShowSoonPost}
        onExit={onExit}
      >
        <CardHeader>
          <div className="font-medium flex items-center justify-between">
            <p className="text-lg">
              {connected
                ? "Feature is comming soon"
                : "Connect to Phantom Wallet"}
            </p>
            <RxCross1
              size={32}
              className="inline-block hover:bg-zinc-300 rounded-lg p-2"
              onClick={onExit}
            />
          </div>
        </CardHeader>
      </ModalBox>
    );
};

export default ConnectWallet;