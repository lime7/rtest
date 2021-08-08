import getFirebase from "../../firebase";

function signOutBtn() {
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <button
      className="btn btn-secondary"
      onClick={() => signOut()}>Sign out</button>
  );
}

export default signOutBtn;