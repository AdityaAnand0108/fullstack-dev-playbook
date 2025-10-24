import { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatedPasswordfn = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSpecialChars) {
      characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    setGeneratedPassword(password);
  }, [passwordLength, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generatedPasswordfn();
  }, [passwordLength, includeNumbers, includeSpecialChars, generatedPasswordfn]);

  return (
    <>
      <div className="bg-gray-500 p-5 m-5 rounded-xl text-blue-50 w-200 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Password Generator</h1>
        <input
          type="text"
          className="p-2 rounded mb-4 w-64 text-black bg-amber-50 text-2xl font-mono font-bold"
          placeholder="Generated Password"
          readOnly
          value={generatedPassword}
        />
        <div className="grid grid-cols-2 gap-2 justify-items-center mb-4">
          <input
            type="range"
            min="4"
            max="50"
            className="w-64"
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
          <label className="ml-2 text-2xl font-mono font-bold">
            Password Length: {passwordLength}
          </label>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <label className="text-xl">Include Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />
            <label className="text-xl">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PasswordGenerator;
