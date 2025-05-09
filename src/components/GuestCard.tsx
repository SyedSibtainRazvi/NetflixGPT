interface GuestCardProps {
  email: string;
  password: string;
}

const GuestCard = ({ email, password }: GuestCardProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      <div className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center space-x-4">
            <p className="text-white text-base">
              <span className="font-semibold">👋 Guest Access:</span> Don't want to create an account? Use these
              credentials to checkout the app:
            </p>
            <div className="flex items-center space-x-3">
              <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white text-sm">{email}</span>
              <span className="text-white/50">|</span>
              <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white text-sm">{password}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
