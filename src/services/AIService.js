import { aiApi } from "./axios-config";

class AIService {
    async uploadImage(file, grupoId, tipoFruta) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("grupo_id", grupoId);
        formData.append("tipo_fruta", tipoFruta);

        try {
            const response = await aiApi.post("/images", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (response.data && response.data.data) {
                return response.data.data;
            } else {
                throw new Error("Resposta inválida do servidor.");
            }
        } catch (error) {
            if (error.response && error.response.data?.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Erro ao conectar com o servidor.");
            }
        }
    }

    async uploadWebcamImage(file, grupoId, tipoFruta) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("grupo_id", grupoId);
        formData.append("tipo_fruta", tipoFruta);

        try {
            const response = await aiApi.post("/images/webcam", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (response.data && response.data.data) {
                return response.data.data;
            } else {
                throw new Error("Resposta inválida do servidor.");
            }
        } catch (error) {
            if (error.response && error.response.data?.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Erro ao conectar com o servidor.");
            }
        }
    }

    async listAnalysis() {
        try {
            const response = await aiApi.get("/images");
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async filterAnalysis(quality, product, date) {
        try {
            const response = await aiApi.get("/images", {
                params: {
                    resultado: quality,
                    tipo_fruta: product,
                    data: date
                }
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        console.error("Erro na requisição:", error);
        if (error.response && error.response.data?.error) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro ao conectar com o servidor.");
        }
    }
}

const aiService = new AIService();
export default aiService;
