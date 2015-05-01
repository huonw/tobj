initSidebarItems({"fn":[["load_mtl","Load the materials defined in a MTL file Returns a pair with a Vec holding all loaded materials and a HashMap containing a mapping of material names to indices in the Vec."],["load_obj","Load the various objects specified in the OBJ file and any associated MTL file Returns a pair of Vecs containing the loaded models and materials from the file."],["print_material_info","Print out all loaded properties of some materials"],["print_model_info","Print out all loaded properties of some models and associated materials"]],"type":[["LoadResult","LoadResult is a result containing all the models loaded from the file and any materials from referenced material libraries, or an error that occured while loading"],["MTLLoadResult","MTLLoadResult is a result containing all the materials loaded from the file and a map of MTL name to index or the error that occured while loading"]],"enum":[["LoadError","Possible errors that may occur while loading OBJ and MTL files"]],"struct":[["Material","A material that may be referenced by one or more meshes. Standard MTL attributes are supported and any unrecognized ones will be stored as Strings in the `unknown_param` HashMap"],["Mesh","A mesh made up of triangles loaded from some OBJ file"],["Model","A named model within the file, associates some mesh with a name that was specified with an `o` or `g` keyword in the OBJ file"]]});