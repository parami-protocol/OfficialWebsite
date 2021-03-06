import { BackSide } from "three";

export default () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[10, 10, 10]} attach="geometry" />
            <meshStandardMaterial
                color={0xd2452b}
                attach="material"
                side={BackSide}
                metalness={0.4}
            />
        </mesh>
    );
};
