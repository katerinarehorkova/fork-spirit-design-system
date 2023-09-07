import React from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderInputProps } from '../../types';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { Icon } from '../Icon';
import { DEFAULT_FILE_QUEUE_LIMIT, DEFAULT_FILE_SIZE_LIMIT } from './constants';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useFileUploaderInput } from './useFileUploaderInput';

const FileUploaderInput = (props: SpiritFileUploaderInputProps) => {
  const {
    accept,
    dropZoneRef,
    helperText,
    iconName = 'upload',
    id,
    inputRef,
    isLabelHidden,
    isDisabled,
    queueLimitBehavior = 'none',
    isMultiple,
    isRequired,
    label,
    labelText,
    linkText,
    maxFileSize = DEFAULT_FILE_SIZE_LIMIT,
    maxUploadedFiles = DEFAULT_FILE_QUEUE_LIMIT,
    onError,
    validationState,
    validationText,
    ...restProps
  } = props;

  const isDragAndDropSupported = 'draggable' in document.createElement('span');

  const {
    isDisabledByQueueLimitBehavior,
    isDragging,
    isDropZoneHidden,
    onChange,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
  } = useFileUploaderInput({
    accept,
    maxFileSize,
    maxUploadedFiles,
    isMultiple,
    queueLimitBehavior,
    onError,
  });
  const { classProps } = useFileUploaderStyleProps({
    isDragAndDropSupported,
    isLabelHidden,
    isDisabled,
    isDropZoneHidden,
    isDragging,
    isDisabledByQueueLimitBehavior,
    isRequired,
    queueLimitBehavior,
    validationState,
  });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const [ids, register] = useAriaIds(ariaDescribedBy);

  useDeprecationMessage({
    method: 'custom',
    trigger: !id,
    componentName: 'FileUploader',
    customText: 'The "id" property will be required instead of optional starting from the next major version.',
  });

  return (
    <div
      {...transferProps}
      {...styleProps}
      onDragOver={!isDisabled && isDragAndDropSupported ? onDragOver : undefined}
      onDragEnter={!isDisabled && isDragAndDropSupported ? onDragEnter : undefined}
      onDragLeave={!isDisabled && isDragAndDropSupported ? onDragLeave : undefined}
      onDrop={!isDisabled && isDragAndDropSupported ? onDrop : undefined}
      className={classNames(classProps.input.root, styleProps.className)}
    >
      <label htmlFor={id} className={classProps.input.label}>
        {label}
      </label>
      <input
        aria-describedby={ids.join(' ')}
        type="file"
        accept={accept}
        id={id}
        ref={inputRef}
        className={classProps.input.input}
        onChange={onChange}
        multiple={isMultiple}
        required={isRequired}
        disabled={isDisabled || isDisabledByQueueLimitBehavior}
        {...restProps}
      />
      <div ref={dropZoneRef} className={classProps.input.dropZone.root}>
        <Icon name={iconName} aria-hidden="true" />
        <label htmlFor={id} className={classProps.input.dropZone.label}>
          <span className={classProps.input.link}>{linkText}</span>
          &nbsp;
          <span className={classProps.input.dropLabel}>{labelText}</span>
        </label>
        <HelperText
          className={classProps.input.helper}
          id={`${id}__helperText`}
          registerAria={register}
          helperText={helperText}
        />
      </div>
      {validationState && (
        <ValidationText
          className={classProps.input.validationText}
          elementType="span"
          id={`${id}__validationText`}
          validationText={validationText}
          registerAria={register}
        />
      )}
    </div>
  );
};

export default FileUploaderInput;
