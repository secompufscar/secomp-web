import NavBar from '../../components/NavBar';
import ImageWithText from './ImagewithText';

export default function Desconto() {
  return (
    <>
      <NavBar />

      <main className="bg-gray-100 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
          <div className="flex justify-center items-center">
            <ImageWithText
              imageUrl="/logo.png"
              altText="Image Alt Text"
              title="Japa açai"
              text="10% de desconto para os participantes no dia do evento"
              obs="(com apresentação de cracha)"
            />
          </div>
          <div className="flex justify-center items-center">
            <ImageWithText
              imageUrl="/logo.png"
              altText="Image Alt Text"
              title="Japa açai"
              text="10% de desconto para os participantes no dia do evento"
              obs="(com apresentação de cracha)"
            />
          </div>
          <div className="flex justify-center items-center">
            <ImageWithText
              imageUrl="/logo.png"
              altText="Image Alt Text"
              title="Japa açai"
              text="10% de desconto para os participantes no dia do evento"
              obs="(com apresentação de cracha)"
            />
          </div>
        </div>
      </main>
    </>
  );
}
