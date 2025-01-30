export type BCFVersion = "2.1" | "3";

export interface BCFTopic {
  guid: string;
  serverAssignedId?: string;
  type: string;
  status: string;
  title: string;
  priority?: string;
  index?: number;
  labels: Set<string>;
  creationDate: Date;
  creationAuthor: string;
  modifiedDate?: Date;
  modifiedAuthor?: string;
  dueDate?: Date;
  assignedTo?: string;
  description?: string;
  stage?: string;
}

/**
 * Configuration settings for managing BCF topics.
 * This interface defines the properties and their meanings used to control the behavior of exporting and importing BCF topics.
 */
export interface BCFTopicsConfig {
  /**
   * The BCF version used during export.
   */
  version: BCFVersion;

  /**
   * The email of the user creating topics using this component.
   */
  author: string;

  /**
   * The set of allowed topic types. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  types: Set<string>;

  /**
   * The set of allowed topic statuses. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  statuses: Set<string>;

  /**
   * The set of allowed topic priorities. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  priorities: Set<string>;

  /**
   * The set of allowed topic labels. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  labels: Set<string>;

  /**
   * The set of allowed topic stages. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  stages: Set<string>;

  /**
   * The set of allowed topic users. This is exported inside the
   * [bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).
   */
  users: Set<string>;

  /**
   * Whether or not to include the AuthoringSoftwareId in the viewpoint components during export.
   */
  includeSelectionTag: boolean;

  /**
   * Updates the types, statuses, users, etc., after importing an external BCF.
   */
  updateExtensionsOnImport: boolean;

  /**
   * Only allow to use the extensions (types, statuses, etc.) defined in the config when setting the corresponding data in a topic.
   */
  strict: boolean;

  /**
   * If true, export the extensions (types, status, etc.) based on topics data. This doesn't update the extensions in the config.
   * If false, only export the extensions defined in each collection of possibilities set in the config.
   * In all cases, all the values from each collection of extensions defined in the config are going to be exported.
   */
  includeAllExtensionsOnExport: boolean;

  /**
   * Version to be used when importing if no bcf.version file is present in the incoming data.
   * When null, the importer will throw an error if the version is missing or is not supported.
   */
  fallbackVersionOnImport: BCFVersion | null;

  /**
   * If true, do not import a topic with missing information (guid, type, status, title, creationDate or creationAuthor).
   * If false, use default values for missing data.
   */
  ignoreIncompleteTopicsOnImport: boolean;
}
