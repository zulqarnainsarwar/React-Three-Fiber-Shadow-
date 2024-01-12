type GLTFResult = GLTF & {
  nodes: {
    Cube013: THREE.Mesh;
    Cube013_1: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube014_1: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube015_1: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube016_1: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube018_1: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube019_1: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube022_1: THREE.Mesh;
  };
  materials: {
    ["Frame_img.002"]: THREE.MeshStandardMaterial;
    ["Frame_border.002"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
  };
};

type Product = {
  name: string;
  price: number;
  type: string;
  image: string;
};

type ProductState = {
  show: boolean;
  name: string;
  type: string;
  price: number;
  image: string;
};

type MenuState = {
  show: boolean;
};
