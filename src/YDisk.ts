import { Api, IOperationOptions } from "./Api";

export interface IError {
  // Человекочитаемое описание ошибки
  message: string;
  // Техническое описание ошибки
  description: string;
  // Уникальный код ошибки
  error: string;
}

export interface IDisk {
  // Признак включенной безлимитной автозагрузки с мобильных устройств.
  unlimited_autoupload_enabled?: boolean;
  // Максимальный поддерживаемый размер файла.
  max_file_size?: number;
  // Общий объем диска (байт)
  total_space?: number;
  // Общий размер файлов в Корзине (байт). Входит в used_space.
  trash_size?: number;
  // Признак наличия купленного места.
  is_paid?: boolean;
  // Используемый объем диска (байт)
  used_space?: number;
  // Адреса системных папок в Диске пользователя.
  system_folders?: ISystemFolders;
  // Владелец Диска
  user?: IUser;
  // Текущая ревизия Диска
  revision?: number;
}

export interface IUser {
  // Страна
  country?: string;
  // Логин
  login?: string;
  // Отображаемое имя
  display_name?: string;
  // Идентификатор пользователя
  uid?: string;
}

export interface ISystemFolders {
  // Путь к папке "Социальные сети/Одноклассники".
  odnoklassniki?: string;
  // Путь к папке "Социальные сети/Google+".
  google?: string;
  // Путь к папке "Социальные сети/Instagram".
  instagram?: string;
  // Путь к папке "Социальные сети/ВКонтакте".
  vkontakte?: string;
  // Путь к папке "Социальные сети/Мой Мир".
  mailru?: string;
  // Путь к папке "Загрузки".
  downloads?: string;
  // Путь к папке "Приложения".
  applications?: string;
  // Путь к папке "Социальные сети/Facebook".
  facebook?: string;
  // Путь к папке "Социальные сети".
  social?: string;
  // Путь к папке "Скриншоты".
  screenshots?: string;
  // Путь к папке "Фотокамера".
  photostream?: string;
}

export interface IExclusionsFromGeneratedAlbumsItems {
  // Список исключений из автосгенерированных альбомов.
  items?: string[];
}

export interface IExif {
  // Дата съёмки.
  date_time?: string;
}

export interface IResourceUploadLink {
  // Идентификатор операции загрузки файла
  operation_id: string;
  // URL
  href: string;
  // HTTP-метод
  method: string;
  // Признак шаблонизированного URL
  templated?: boolean;
}

export interface ICommentIds {
  // Идентификатор комментариев для приватных ресурсов.
  private_resource?: string;
  // Идентификатор комментариев для публичных ресурсов.
  public_resource?: string;
}

export interface ISnapshotIterationKey {
  // Ключ итерации
  iteration_key?: string;
}

export interface IResourceVersion {
  // uid пользователя создавшего версию
  uid_created: string;
  // iteration_key для получения свернутых версию
  folded_items_iteration_key?: string;
  // Дата создания
  created: string;
  // Может ли версия быть восстановлена
  can_be_restored: boolean;
  // Тип версии
  type: string;
  // Размер версии (только для бинарных)
  size?: number;
  // URL для скачивания файла
  file?: string;
  // SHA256-хэш
  sha256?: string;
  // Название платформы, из которой создали версию
  platform_created: string;
  // ID версии
  id: string;
  // MD5-хэш
  md5?: string;
}

export interface ISearchResource {
  // Статус проверки антивирусом
  antivirus_status?: unknown;
  // Идентификатор ресурса
  resource_id?: string;
  // Информация об общей папке
  share?: IShareInfo;
  // URL для скачивания файла
  file?: string;
  // Размер файла
  size?: number;
  // Дата создания фото или видео файла
  photoslice_time?: string;
  // Список вложенных ресурсов
  _embedded?: ISearchResource;
  // Метаданные медиафайла (EXIF)
  exif?: IExif;
  // Пользовательские атрибуты ресурса
  custom_properties?: object;
  // Определённый Диском тип файла
  media_type?: string;
  // SHA256-хэш
  sha256?: string;
  // Тип
  type: string;
  // MIME-тип файла
  mime_type?: string;
  // Ревизия Диска в которой этот ресурс был изменён последний раз
  revision?: number;
  // Механизм индексации документа
  search_scope?: string;
  // Публичный URL
  public_url?: string;
  // Путь к ресурсу
  path: string;
  // MD5-хэш
  md5?: string;
  // Ключ опубликованного ресурса
  public_key?: string;
  // URL превью файла
  preview?: string;
  // Имя
  name: string;
  // Дата создания
  created: string;
  // Дата изменения
  modified: string;
  // Идентификаторы комментариев
  comment_ids?: ICommentIds;
}

export interface IPublicResourcesList {
  // Элементы списка
  items: IResource[];
  // Значение фильтра по типу ресурсов
  type?: string;
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
}

export interface IRootShareInfo {
  // Признак, что текущий пользователь является владельцем общей папки
  is_owned?: boolean;
  // Права доступа
  rights: string;
}

export interface IImageMetadata {
  // Высота
  width?: number;
  // Угол поворота изображения
  angle?: number;
  // Красивость изображения по компьютерному зрению
  beauty?: number;
  // Ширина
  height?: number;
}

export interface ILastUploadedResourceList {
  // Элементы списка
  items: IResource[];
  // Количество элементов на странице
  limit?: number;
}

export interface IUploadResource {
  // Ссылка на получение статуса операции.
  operation_link: ILink;
  // URL файла.
  upload_link: ILink;
}

export interface IDelta {
  // Новый путь к ресурсу
  new_path?: string;
  // Тип изменения
  change_type: string;
  // Идентификатор ресурса
  resource_id: string;
  // Disk software symlink
  discsw_symlink?: string;
  // Информация об общей папке
  share?: IRootShareInfo;
  // Путь к ресурсу
  path: string;
  // Ресурс, для которого произошло изменение
  resource?: IDeltaResource;
  // Тип ресурса
  type: string;
  // Ревизия
  revision: number;
}

export interface ILink {
  // URL
  href: string;
  // HTTP-метод
  method: string;
  // Признак шаблонизированного URL
  templated?: boolean;
}

export interface IFilesResourceList {
  // Элементы списка
  items: IResource[];
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
}

export interface IResource {
  // Статус проверки антивирусом
  antivirus_status?: unknown;
  // Идентификатор ресурса
  resource_id?: string;
  // Информация об общей папке
  share?: IShareInfo;
  // URL для скачивания файла
  file?: string;
  // Размер файла
  size?: number;
  // Дата создания фото или видео файла
  photoslice_time?: string;
  // Список вложенных ресурсов
  _embedded?: IResourceList;
  // Метаданные медиафайла (EXIF)
  exif?: IExif;
  // Пользовательские атрибуты ресурса
  custom_properties?: object;
  // Определённый Диском тип файла
  media_type?: string;
  // URL превью файла
  preview?: string;
  // Тип
  type: string;
  // MIME-тип файла
  mime_type?: string;
  // Ревизия Диска в которой этот ресурс был изменён последний раз
  revision?: number;
  // Публичный URL
  public_url?: string;
  // Путь к ресурсу
  path: string;
  // MD5-хэш
  md5?: string;
  // Ключ опубликованного ресурса
  public_key?: string;
  // SHA256-хэш
  sha256?: string;
  // Имя
  name: string;
  // Дата создания
  created: string;
  // Дата изменения
  modified: string;
  // Идентификаторы комментариев
  comment_ids?: ICommentIds;
}

export interface IDeltaResource {
  // SHA256-хэш
  sha256?: string;
  // Публичный URL
  public_url?: string;
  // MD5-хэш
  md5?: string;
  // Дата изменения
  modified: string;
  // Размер файла
  size?: number;
}

export interface IOfficeOnlineEditorURL {
  // Ссылка на редактирование файла.
  edit_url: string;
}

export interface IShareInfo {
  // Признак того, что папка является корневой в группе
  is_root?: boolean;
  // Признак, что текущий пользователь является владельцем общей папки
  is_owned?: boolean;
  // Права доступа
  rights: string;
}

export interface ISnapshot {

  iteration_key: string;
  // Элементы снепшота
  items?: ISnapshotResource[];
  // Ревизия Диска
  revision: number;
}

export interface ISnapshotResource {
  // SHA256-хэш
  sha256?: string;
  // Идентификатор ресурса
  resource_id?: string;
  // Публичный URL
  public_url?: string;
  // Информация об общей папке
  share?: IRootShareInfo;
  // Дата изменения
  modified: string;
  // Disk software symlink
  discsw_symlink?: string;
  // Путь к ресурсу
  path: string;
  // Ревизия Диска в которой этот ресурс был изменён последний раз
  revision?: number;
  // Тип
  type: string;
  // MD5-хэш
  md5?: string;
  // Размер файла
  size?: number;
}

export interface ISearchResourceList {
  // Поле, по которому отсортирован список
  sort?: string;
  // Поле, по которому отсортирован список
  iteration_key?: string;
  // Элементы списка
  items: ISearchResource[];
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
  // Путь к ресурсу, для которого построен список
  path: string;
  // Общее количество элементов в списке
  total?: number;
}

export interface IResourcePatch {
  // Пользовательские атрибуты ресурса
  custom_properties?: object;
}

export interface IDeltas {

  iteration_key: string;
  // Список изменений
  items: IDelta[];
  // Ревизия Диска
  revision: number;
}

export interface IResourceVersions {
  // Ключ итерирования по списку версий.
  iteration_key?: string;
  // Список версий.
  items: IResourceVersion[];
}

export interface IVideoMetadata {
  // Длительность видео в миллисекундах
  duration?: number;
}

export interface IResourceList {
  // Поле, по которому отсортирован список
  sort?: string;
  // Элементы списка
  items: IResource[];
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
  // Путь к ресурсу, для которого построен список
  path: string;
  // Общее количество элементов в списке
  total?: number;
}

export interface IResourceDimensions {
  // Ширина изображения.
  width?: number;
  // Высота изображения.
  height?: number;
}

export interface IPublicResource {
  // Статус проверки антивирусом
  antivirus_status?: unknown;
  // Счетчик просмотров публичного ресурса
  views_count?: number;
  // Идентификатор ресурса
  resource_id?: string;
  // Информация об общей папке
  share?: IShareInfo;
  // URL для скачивания файла
  file?: string;
  // Владелец опубликованного ресурса
  owner?: IUserPublicInformation;
  // Размер файла
  size?: number;
  // Дата создания фото или видео файла
  photoslice_time?: string;
  // Список вложенных ресурсов
  _embedded?: IPublicResourceList;
  // Метаданные медиафайла (EXIF)
  exif?: IExif;
  // Определённый Диском тип файла
  media_type?: string;
  // SHA256-хэш
  sha256?: string;
  // Тип
  type: string;
  // MIME-тип файла
  mime_type?: string;
  // Ревизия Диска в которой этот ресурс был изменён последний раз
  revision?: number;
  // Публичный URL
  public_url?: string;
  // Путь опубликованного ресурса
  path: string;
  // MD5-хэш
  md5?: string;
  // Ключ опубликованного ресурса
  public_key: string;
  // URL превью файла
  preview?: string;
  // Имя
  name: string;
  // Дата создания
  created: string;
  // Дата изменения
  modified: string;
  // Идентификаторы комментариев
  comment_ids?: ICommentIds;
}

export interface IPublicResourceList {
  // Поле, по которому отсортирован список
  sort?: string;
  // Ключ опубликованного ресурса
  public_key: string;
  // Элементы списка
  items: IPublicResource[];
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
  // Путь опубликованного ресурса
  path: string;
  // Общее количество элементов в списке
  total?: number;
}

export interface IUserPublicInformation {
  // Логин.
  login?: string;
  // Отображаемое имя пользователя.
  display_name?: string;
  // Идентификатор пользователя.
  uid?: string;
}

export interface ITrashResourceList {
  // Поле, по которому отсортирован список
  sort?: string;
  // Элементы списка
  items: ITrashResource[];
  // Количество элементов на странице
  limit?: number;
  // Смещение от начала списка
  offset?: number;
  // Путь к ресурсу, для которого построен список
  path: string;
  // Общее количество элементов в списке
  total?: number;
}

export interface ITrashResource {
  // Статус проверки антивирусом
  antivirus_status?: unknown;
  // Идентификатор ресурса
  resource_id?: string;
  // Информация об общей папке
  share?: IShareInfo;
  // URL для скачивания файла
  file?: string;
  // Размер файла
  size?: number;
  // Дата создания фото или видео файла
  photoslice_time?: string;
  // Список вложенных ресурсов
  _embedded?: ITrashResourceList;
  // Метаданные медиафайла (EXIF)
  exif?: IExif;
  // Пользовательские атрибуты ресурса
  custom_properties?: object;
  // Путь откуда был удалён ресурс
  origin_path?: string;
  // Определённый Диском тип файла
  media_type?: string;
  // SHA256-хэш
  sha256?: string;
  // Тип
  type: string;
  // MIME-тип файла
  mime_type?: string;
  // Ревизия Диска в которой этот ресурс был изменён последний раз
  revision?: number;
  // Дата добавления в корзину(для ресурсов в корзине)
  deleted?: string;
  // Публичный URL
  public_url?: string;
  // Путь к ресурсу
  path: string;
  // MD5-хэш
  md5?: string;
  // Ключ опубликованного ресурса
  public_key?: string;
  // URL превью файла
  preview?: string;
  // Имя
  name: string;
  // Дата создания
  created: string;
  // Дата изменения
  modified: string;
  // Идентификаторы комментариев
  comment_ids?: ICommentIds;
}

export interface IOperationStatus {
  // Статус операции
  status: string;
}

export interface IGetDiskOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IGetResourceOptions extends IOperationOptions {
  query: {
    // Путь к ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых вложенных ресурсов.
    limit?: number;
    // Смещение от начала списка вложенных ресурсов.
    offset?: number;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
    // Поле для сортировки вложенных ресурсов.
    sort?: string;
  };
}

export interface ICreateResourceOptions extends IOperationOptions {
  query: {
    // Путь к создаваемой папке.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IDeleteResourceOptions extends IOperationOptions {
  query: {
    // Путь к файлу или папке.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // md5 удаляемого файла.
    md5?: string;
    // Удалить ресурс не помещая в Корзину.
    permanently?: boolean;
  };
}

export interface IUpdateResourceOptions extends IOperationOptions {
  body: {
    body: IResourcePatch;
  };

  query: {
    // Путь к обновляемому ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface ICopyResourceOptions extends IOperationOptions {
  query: {
    // Путь к копируемому ресурсу.
    from: string;
    // Путь к создаваемому ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // Перезаписать существующий ресурс.
    overwrite?: boolean;
  };
}

export interface IGetResourceDownloadLinkOptions extends IOperationOptions {
  query: {
    // Путь к ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IGetFlatFilesListOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых вложенных ресурсов.
    limit?: number;
    // Фильтр по медиа типу.
    media_type?: string;
    // Смещение от начала списка вложенных ресурсов.
    offset?: number;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
    // Поле для сортировки ресурсов.
    sort?: string;
  };
}

export interface IGetLastUploadedFilesListOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых вложенных ресурсов.
    limit?: number;
    // Фильтр по медиа типу.
    media_type?: string;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
  };
}

export interface IMoveResourceOptions extends IOperationOptions {
  query: {
    // Путь к перемещаемому ресурсу.
    from: string;
    // Путь к создаваемому ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // Перезаписать существующий ресурс.
    overwrite?: boolean;
  };
}

export interface IListPublicResourcesOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых ресурсов.
    limit?: number;
    // Смещение от начала списка ресурсов.
    offset?: number;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
    // Фильтр по типам ресурсов.
    type?: 'file' | 'dir';
  };
}

export interface IPublishResourceOptions extends IOperationOptions {
  query: {
    // Путь к публикуемому ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IUnpublishResourceOptions extends IOperationOptions {
  query: {
    // Путь к ресурсу.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IUploadExternalResourceOptions extends IOperationOptions {
  query: {
    // Путь, куда будет помещён ресурс.
    path: string;
    // URL внешнего ресурса, который следует загрузить.
    url: string;
    // Запретить делать редиректы.
    disable_redirects?: boolean;
    // Список возвращаемых атрибутов.
    fields?: string;
  };
}

export interface IGetResourceUploadLinkOptions extends IOperationOptions {
  query: {
    // Путь к загружаемому файлу на Диске.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Перезаписать существующий файл.
    overwrite?: boolean;
  };
}

export interface IGetPublicResourceOptions extends IOperationOptions {
  query: {
    // Ключ или публичный URL ресурса.
    public_key: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых вложенных ресурсов.
    limit?: number;
    // Смещение от начала списка вложенных ресурсов.
    offset?: number;
    // Путь к ресурсу в публичной папке.
    path?: string;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
    // Поле для сортировки вложенных ресурсов.
    sort?: string;
  };
}

export interface IGetPublicResourceDownloadLinkOptions extends IOperationOptions {
  query: {
    // Ключ или публичный URL ресурса.
    public_key: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Путь к ресурсу в публичной папке.
    path?: string;
  };
}

export interface ISaveToDiskPublicResourceOptions extends IOperationOptions {
  query: {
    // Ключ или публичный URL ресурса.
    public_key: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // Имя, под которым ресурс будет сохранён в папке.
    name?: string;
    // Путь к копируемому ресурсу в публичной папке.
    path?: string;
    // Путь к папке, в которую будет сохранен ресурс. По умолчанию «Загрузки».
    save_path?: string;
  };
}

export interface IClearTrashOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // Путь к ресурсу в Корзине.
    path?: string;
  };
}

export interface IGetTrashResourceOptions extends IOperationOptions {
  query: {
    // Путь к ресурсу в Корзине.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Количество выводимых вложенных ресурсов.
    limit?: number;
    // Смещение от начала списка вложенных ресурсов.
    offset?: number;
    // Разрешить обрезку превью.
    preview_crop?: boolean;
    // Размер превью.
    preview_size?: string;
    // Поле для сортировки вложенных ресурсов.
    sort?: 'deleted' | 'created' | '-deleted' | '-created';
  };
}

export interface IRestoreFromTrashOptions extends IOperationOptions {
  query: {
    // Путь к ресурсу в Корзине.
    path: string;
    // Список возвращаемых атрибутов.
    fields?: string;
    // Выполнить асинхронно.
    force_async?: boolean;
    // Имя, под которым будет восстановлен ресурс.
    name?: string;
    // Перезаписать существующий ресурс восстанавливаемым.
    overwrite?: boolean;
  };
}

export interface IGetOperationStatusOptions extends IOperationOptions {
  query?: {
    // Список возвращаемых атрибутов.
    fields?: string;
  };
  params: {
    // Идентификатор операции.
    operation_id: string;
  };
}

// Диск пользователя
export class YDisk extends Api {
  /**
   * Create instance
   * @constructor
   * @param {string} token - OAuth token
   */
  constructor(token: string) {
    super({ url: 'https://cloud-api.yandex.net', token });
  }

  /**
   * Получить метаинформацию о диске пользователя
   * @param   object  [options] - IGetDiskOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <IDisk>
   */
  async getDisk(options?: IGetDiskOptions): Promise<IDisk> {
    return this.requestJson({ method: 'GET', path: '/v1/disk', ...options });
  }

  /**
   * Получить метаинформацию о файле или каталоге
   * @param   object   options - IGetResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых вложенных ресурсов.
   * @param   number  [options.query.offset] - Смещение от начала списка вложенных ресурсов.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @param   string  [options.query.sort] - Поле для сортировки вложенных ресурсов.
   * @returns Promise <IResource>
   */
  async getResource(options: IGetResourceOptions): Promise<IResource> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources', ...options });
  }

  /**
   * Создать папку
   * @param   object   options - ICreateResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к создаваемой папке.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <ILink>
   */
  async createResource(options: ICreateResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'PUT', path: '/v1/disk/resources', ...options });
  }

  /**
   * Удалить файл или папку
   * @param   object   options - IDeleteResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к файлу или папке.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   string  [options.query.md5] - md5 удаляемого файла.
   * @param   boolean [options.query.permanently] - Удалить ресурс не помещая в Корзину.
   * @returns Promise <unknown>
   */
  async deleteResource(options: IDeleteResourceOptions): Promise<unknown> {
    return this.requestJson({ method: 'DELETE', path: '/v1/disk/resources', ...options });
  }

  /**
   * Обновить пользовательские данные ресурса
   * @param   object   options - IUpdateResourceOptions
   * @param   object  [options.body] - body params
   * @param   object   options.body.body - IResourcePatch
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к обновляемому ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <IResource>
   */
  async updateResource(options: IUpdateResourceOptions): Promise<IResource> {
    return this.requestJson({ method: 'PATCH', path: '/v1/disk/resources', ...options });
  }

  /**
   * Создать копию файла или папки
   * @param   object   options - ICopyResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.from - Путь к копируемому ресурсу.
   * @param   string   options.query.path - Путь к создаваемому ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   boolean [options.query.overwrite] - Перезаписать существующий ресурс.
   * @returns Promise <ILink>
   */
  async copyResource(options: ICopyResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'POST', path: '/v1/disk/resources/copy', ...options });
  }

  /**
   * Получить ссылку на скачивание файла
   * @param   object   options - IGetResourceDownloadLinkOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <ILink>
   */
  async getResourceDownloadLink(options: IGetResourceDownloadLinkOptions): Promise<ILink> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources/download', ...options });
  }

  /**
   * Получить список файлов упорядоченный по имени
   * @param   object  [options] - IGetFlatFilesListOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых вложенных ресурсов.
   * @param   string  [options.query.media_type] - Фильтр по медиа типу.
   * @param   number  [options.query.offset] - Смещение от начала списка вложенных ресурсов.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @param   string  [options.query.sort] - Поле для сортировки ресурсов.
   * @returns Promise <IFilesResourceList>
   */
  async getFlatFilesList(options?: IGetFlatFilesListOptions): Promise<IFilesResourceList> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources/files', ...options });
  }

  /**
   * Получить список файлов упорядоченный по дате загрузки
   * @param   object  [options] - IGetLastUploadedFilesListOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых вложенных ресурсов.
   * @param   string  [options.query.media_type] - Фильтр по медиа типу.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @returns Promise <ILastUploadedResourceList>
   */
  async getLastUploadedFilesList(options?: IGetLastUploadedFilesListOptions): Promise<ILastUploadedResourceList> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources/last-uploaded', ...options });
  }

  /**
   * Переместить файл или папку
   * @param   object   options - IMoveResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.from - Путь к перемещаемому ресурсу.
   * @param   string   options.query.path - Путь к создаваемому ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   boolean [options.query.overwrite] - Перезаписать существующий ресурс.
   * @returns Promise <ILink>
   */
  async moveResource(options: IMoveResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'POST', path: '/v1/disk/resources/move', ...options });
  }

  /**
   * Получить список опубликованных ресурсов
   * @param   object  [options] - IListPublicResourcesOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых ресурсов.
   * @param   number  [options.query.offset] - Смещение от начала списка ресурсов.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @param   string  [options.query.type] - Фильтр по типам ресурсов. ('file'|'dir')
   * @returns Promise <IPublicResourcesList>
   */
  async listPublicResources(options?: IListPublicResourcesOptions): Promise<IPublicResourcesList> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources/public', ...options });
  }

  /**
   * Опубликовать ресурс
   * @param   object   options - IPublishResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к публикуемому ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <ILink>
   */
  async publishResource(options: IPublishResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'PUT', path: '/v1/disk/resources/publish', ...options });
  }

  /**
   * Отменить публикацию ресурса
   * @param   object   options - IUnpublishResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к ресурсу.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <ILink>
   */
  async unpublishResource(options: IUnpublishResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'PUT', path: '/v1/disk/resources/unpublish', ...options });
  }

  /**
   * Загрузить файл в Диск по URL
   * @param   object   options - IUploadExternalResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь, куда будет помещён ресурс.
   * @param   string   options.query.url - URL внешнего ресурса, который следует загрузить.
   * @param   boolean [options.query.disable_redirects] - Запретить делать редиректы.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @returns Promise <ILink>
   */
  async uploadExternalResource(options: IUploadExternalResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'POST', path: '/v1/disk/resources/upload', ...options });
  }

  /**
   * Получить ссылку для загрузки файла
   * @param   object   options - IGetResourceUploadLinkOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к загружаемому файлу на Диске.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.overwrite] - Перезаписать существующий файл.
   * @returns Promise <IResourceUploadLink>
   */
  async getResourceUploadLink(options: IGetResourceUploadLinkOptions): Promise<IResourceUploadLink> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/resources/upload', ...options });
  }

  /**
   * Получить метаинформацию о публичном файле или каталоге
   * @param   object   options - IGetPublicResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.public_key - Ключ или публичный URL ресурса.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых вложенных ресурсов.
   * @param   number  [options.query.offset] - Смещение от начала списка вложенных ресурсов.
   * @param   string  [options.query.path] - Путь к ресурсу в публичной папке.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @param   string  [options.query.sort] - Поле для сортировки вложенных ресурсов.
   * @returns Promise <IPublicResource>
   */
  async getPublicResource(options: IGetPublicResourceOptions): Promise<IPublicResource> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/public/resources', ...options });
  }

  /**
   * Получить ссылку на скачивание публичного ресурса
   * @param   object   options - IGetPublicResourceDownloadLinkOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.public_key - Ключ или публичный URL ресурса.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   string  [options.query.path] - Путь к ресурсу в публичной папке.
   * @returns Promise <ILink>
   */
  async getPublicResourceDownloadLink(options: IGetPublicResourceDownloadLinkOptions): Promise<ILink> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/public/resources/download', ...options });
  }

  /**
   * Сохранить публичный ресурс в папку Загрузки
   * @param   object   options - ISaveToDiskPublicResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.public_key - Ключ или публичный URL ресурса.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   string  [options.query.name] - Имя, под которым ресурс будет сохранён в папке.
   * @param   string  [options.query.path] - Путь к копируемому ресурсу в публичной папке.
   * @param   string  [options.query.save_path] - Путь к папке, в которую будет сохранен ресурс. По умолчанию «Загрузки».
   * @returns Promise <ILink>
   */
  async saveToDiskPublicResource(options: ISaveToDiskPublicResourceOptions): Promise<ILink> {
    return this.requestJson({ method: 'POST', path: '/v1/disk/public/resources/save-to-disk', ...options });
  }

  /**
   * Очистить Корзину
   * @param   object  [options] - IClearTrashOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   string  [options.query.path] - Путь к ресурсу в Корзине.
   * @returns Promise <ILink>
   */
  async clearTrash(options?: IClearTrashOptions): Promise<ILink> {
    return this.requestJson({ method: 'DELETE', path: '/v1/disk/trash/resources', ...options });
  }

  /**
   * Получить содержимое Корзины
   * @param   object   options - IGetTrashResourceOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к ресурсу в Корзине.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   number  [options.query.limit] - Количество выводимых вложенных ресурсов.
   * @param   number  [options.query.offset] - Смещение от начала списка вложенных ресурсов.
   * @param   boolean [options.query.preview_crop] - Разрешить обрезку превью.
   * @param   string  [options.query.preview_size] - Размер превью.
   * @param   string  [options.query.sort] - Поле для сортировки вложенных ресурсов. ('deleted'|'created'|'-deleted'|'-created')
   * @returns Promise <ITrashResource>
   */
  async getTrashResource(options: IGetTrashResourceOptions): Promise<ITrashResource> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/trash/resources', ...options });
  }

  /**
   * Восстановить ресурс из Корзины
   * @param   object   options - IRestoreFromTrashOptions
   * @param   object  [options.query] - query params
   * @param   string   options.query.path - Путь к ресурсу в Корзине.
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   boolean [options.query.force_async] - Выполнить асинхронно.
   * @param   string  [options.query.name] - Имя, под которым будет восстановлен ресурс.
   * @param   boolean [options.query.overwrite] - Перезаписать существующий ресурс восстанавливаемым.
   * @returns Promise <ILink>
   */
  async restoreFromTrash(options: IRestoreFromTrashOptions): Promise<ILink> {
    return this.requestJson({ method: 'PUT', path: '/v1/disk/trash/resources/restore', ...options });
  }

  /**
   * Получить статус асинхронной операции
   * @param   object   options - IGetOperationStatusOptions
   * @param   object  [options.query] - query params
   * @param   string  [options.query.fields] - Список возвращаемых атрибутов.
   * @param   object  [options.params] - path params
   * @param   string   options.params.operation_id - Идентификатор операции.
   * @returns Promise <IOperationStatus>
   */
  async getOperationStatus(options: IGetOperationStatusOptions): Promise<IOperationStatus> {
    return this.requestJson({ method: 'GET', path: '/v1/disk/operations/{operation_id}', ...options });
  }
}
