import Background from '@/components/Background/Background';
import ToDo from '@/components/ToDo/ToDo';
import { imageConfig } from '@/imageConfig';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex  justify-center">
            <Background />
            <ToDo title={'TODO'} image={<Image {...imageConfig.moon} />} />
        </main>
    );
}
