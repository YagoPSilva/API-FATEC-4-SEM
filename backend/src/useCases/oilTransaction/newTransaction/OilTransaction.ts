import OilTransactionRepository from "../../../repositories/implementation/OilTransactionRepository";
import WalletRepository from "../../../repositories/implementation/RegistryRepository ";
import OilTransactionController from "./OilTransactionController";
import OilTransactionUC from "./OilTransactionUC";

export const create = new OilTransactionController(
	new OilTransactionUC(new OilTransactionRepository(), new WalletRepository()),
);
